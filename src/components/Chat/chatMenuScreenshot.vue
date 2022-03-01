<!-- 发送类型 截图 -->
<template>
  <div class="chat-menu-screenshot">
    <!-- 发送类型菜单 截图 -->
    <div class="menu-item menu-screenshot" @click="onScreenshot">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-worktong-a-jianqiejietu"></use>
      </svg>
    </div>
    <template>
      <teleport to="body">
        <!-- 截图区域 -->
        <canvas
          id="screenShotContainer"
          :width="screenShotWidth"
          :height="screenShotHeight"
          ref="screenShotController"
        ></canvas>
      </teleport>
    </template>
    <template>
      <teleport to="body">
        <!--工具栏-->
        <div
          id="toolPanel"
          v-show="toolStatus"
          :style="{ left: toolLeft + 'px', top: toolTop + 'px' }"
          ref="toolController"
        >
          <div
            v-for="item in toolbar"
            :key="item.id"
            :class="`item-panel ${item.title} `"
            @click="toolClickEvent(item.title, item.id, $event)"
          ></div>
          <!--撤销部分单独处理-->
          <div
            v-if="undoStatus"
            class="item-panel undo"
            @click="toolClickEvent('undo', 9, $event)"
          ></div>
          <div v-else class="item-panel undo-disabled"></div>
          <!--关闭与确认进行单独处理-->
          <div
            class="item-panel close"
            @click="toolClickEvent('close', 10, $event)"
          ></div>
          <div
            class="item-panel confirm"
            @click="toolClickEvent('confirm', 11, $event)"
          ></div>
        </div>
      </teleport>
    </template>
  </div>
</template>


<script setup>
//开源库html2canvas，可以实现将指定dom转换成canvas
import html2canvas from "html2canvas";
import { ref, reactive, nextTick } from "vue";
//工具栏内容
const toolbar = [
  {
    id: 1,
    title: "square",
  },
  {
    id: 2,
    title: "round",
  },
  {
    id: 3,
    title: "right-top",
  },
  {
    id: 4,
    title: "brush",
  },
  {
    id: 5,
    title: "mosaicPen",
  },
  {
    id: 6,
    title: "text",
  },
  {
    id: 7,
    title: "separateLine",
  },
  {
    id: 8,
    title: "save",
  },
];
//截图区域canvas容器
const screenShotController = ref();
//截图区域画布
const screenShortCanvas = ref();
//截图图片存放容器
const screenShotImageController = ref();
//截图区域canvas宽高
const screenShotWidth = ref(0);
const screenShotHeight = ref(0);
//截图工具栏显示状态与位置
const toolController = ref();
const toolStatus = ref(false);
const toolLeft = ref(0);
const toolTop = ref(0);
//裁剪拖拽状态
const dragging = ref(false);
//鼠标点击状态
const clickFlag = ref(false);
//鼠标拖动状态
const dragFlag = ref(false);
// //上一个裁剪框坐标信息
// const drawGraphPrevX = ref(0);
// const drawGraphPrevY = ref(0);
// //当前点击的工具栏条目
// const toolName = ref("");
// const fontSize = 17;
// //撤销点击次数
// const undoClickNum = ref(0);
// //最大可撤销次数
// const maxUndoNum = 15;
//是否为截取全屏状态
const getFullScreenStatus = ref(false);
//裁剪框修剪状态
const draggingTrim = ref(false);
//当前操作的边框节点
const borderOption = ref();
//点击裁剪框时的鼠标坐标
const movePosition = reactive({
  moveStartX: 0,
  moveStratY: 0,
});
//裁剪框图形位置参数
const drawGraphPosition = reactive({
  startX: 0,
  startY: 0,
  width: 0,
  height: 0,
});
//临时裁剪框位置参数
const tempGraphPosition = reactive({
  startX: 0,
  startY: 0,
  width: 0,
  height: 0,
});
//裁剪框边框节点坐标事件
const cutOutBoxBorderArr = ref([]);
//裁剪框定点边框直径大小
const borderSize = 10;
//1.获取当前可视区域的内容并且将其转换成的canvas存放起来
const onScreenshot = () => {
  toCanvas();
};
const toCanvas = () => {
  screenShotWidth.value = window.innerWidth;
  screenShotHeight.value = window.innerHeight;
  toolStatus.value = false;
  html2canvas(document.body, {
    useCORS: true,
  }).then((canvas) => {
    //装载截图的dom如果为空就直接退出
    if (screenShotController.value == null) return;
    //存放转换好的canvas
    screenShotImageController.value = canvas;
    const context = screenShotController.value?.getContext("2d");
    //赋值截图区域canvas画布
    screenShortCanvas.value = context;
    if (context == null) return;
    //调整截屏容器层级
    screenShotController.value.style.zIndex = 0;
    //调整截图工具栏层级
    if (toolController.value == null) return;
    toolController.value.style.zIndex = 1;
    //绘制蒙版
    drawMask(context);
    //添加监听
    addMouseEvent();
  });
};
//2.绘制蒙版：拿到转化后的canvas后，绘制一个透明度为0.6的灰色蒙层，表示正在截图选区中
const drawMask = (context) => {
  console.log(window.innerHeight, window.innerWidth);
  //清除画布
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  //绘制蒙层
  context.save();
  context.fillStyle = "rgba(0,0,0,0.6)";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  //绘制结束
  context.restore();
};
//3.绘制镂空选中区域
//3.1 绑定添加鼠标事件
const addMouseEvent = () => {
  //为截图画布绑定鼠标按下事件
  screenShotController.value?.addEventListener("mousedown", onMouseDown);
  //为截图画布绑定鼠标移动事件
  screenShotController.value?.addEventListener("mousemove", onMouseMove);
  //为截图画布绑定鼠标抬起事件
  screenShotController.value?.addEventListener("mouseup", onMouseUp);
};
//3.2 定义监听鼠标按下，移动，抬起事件，并获取位置信息
const onMouseDown = (event) => {
  dragging.value = true; //开始拖拽
  clickFlag.value = true; //开始鼠标点击
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;

  //如果当前操纵的是裁剪框
  if (borderOption.value) {
    //设置为拖动状态
    draggingTrim.value = true;
    //记录开始移动时的起始点坐标
    movePosition.moveStartX = mouseX;
    movePosition.moveStratY = mouseY;
  } else {
    //如果当前操纵的不是裁剪框节点，就绘制裁剪框，并记录当前鼠标开始坐标
    drawGraphPosition.startX = mouseX;
    drawGraphPosition.startY = mouseY;
  }
};
const onMouseMove = (event) => {
  clickFlag.value = false;
  //获取裁剪框位置信息
  const { startX, startY, width, height } = drawGraphPosition;
  //获取当前鼠标坐标
  const currentX = event.offsetX;
  const currentY = event.offsetY;
  //计算 设置临时裁剪框宽高
  const tempWidth = currentX - startX;
  const tempHeight = currentY - startY;
  //执行操作裁剪框函数
  operatingCutOutBox(
    currentX,
    currentY,
    startX,
    startY,
    width,
    height,
    screenShortCanvas
  );
  //如果鼠标未点击或者当前操作的是裁剪框就return
  if (!dragging.value || draggingTrim.value) return;
  //绘制裁剪框
  const tempObj = drawCutOutBox(
    startX,
    startY,
    tempWidth,
    tempHeight,
    screenShortCanvas,
    borderSize,
    screenShotController,
    screenShotImageController
  );
  tempGraphPosition.startX = tempObj.startX;
  tempGraphPosition.startY = tempObj.startY;
  tempGraphPosition.width = tempObj.width;
  tempGraphPosition.height = tempObj.height;
};
const onMouseUp = (event) => {
  //当前操作的是撤销，直接返回
  //目前没开启功能键暂时不写
  // if(toolName.value="undo")return;

  //绘制结束
  dragging.value = false;
  draggingTrim.value = false;
  if (
    screenShotController.value == null ||
    screenShortCanvas.value == null ||
    screenShotImageController.value == null
  ) {
    return;
  }

  //工具栏未点击 且 鼠标未拖动 且 单击截屏状态为false 则复原裁剪框位置
  //目前没有工具栏就先不写tool有关
  // if(
  //   !data.getToolClickStatus().value&&
  //   !dragFlag&&
  //   !clickCutFullScreen
  // ){
  //   drawGraphPosition.startX=drawGraphPrevX;
  //   drawGraphPosition.startY=drawGraphPrevY;
  //   return;
  // }

  if (screenShotController.value != null) {
    //修改鼠标状态为拖动
    screenShotController.value.style.cursor = "move";
    //复原拖动状态
    dragFlag.value = false;
    //显示截图工具栏
    toolStatus.value = true;
    nextTick().then(() => {
      if (toolController.value != null) {
        // 计算工具栏位置
        const toolLocation = calculateToolLocation(
          drawGraphPosition,
          toolController.value?.offsetWidth
        );
        //当前截取为全屏时，则修改工具栏位置到截图容器最底部，防止溢出
        if (getFullScreenStatus.value) {
          toolLocation.mouseY -= 64;
        }
        //设置截图工具位置
        toolLeft.value = toolLocation.mouseX;
        toolTop.value = toolLocation.mouseY;
        //状态重置
        getFullScreenStatus.value = false;
      }
    });
  }
};

// 计算工具栏位置函数
const calculateToolLocation = (
  position, //裁剪框位置信息
  toolWidth //截图工具栏宽度
) => {
  //工具栏X轴坐标=（裁剪框的宽度-工具栏的宽度）/2+裁剪框距离左侧的距离
  const mouseX = (position.width - toolWidth) / 2 + position.startX;
  //工具栏Y轴坐标
  let mouseY = position.startY + position.height + 10;
  if (position.width < 0 && position.height < 0) {
    //从右下角拖动时，工具栏y轴的位置应该为position.startY+10
    mouseY = position.startY + 10;
  }
  return {
    mouseX,
    mouseY,
  };
};

//3.3 绘制裁剪框相关
//3.3.1操作裁剪框
const operatingCutOutBox = (
  currentX, //裁剪框当前X轴坐标
  currentY, //裁剪框当前Y轴坐标
  startX, //鼠标X轴坐标
  startY, //鼠标Y轴坐标
  width, //裁剪框宽度
  height, //裁剪框高度
  context //需要进行绘制的canvas画布
) => {
  //canvas元素如果不存在，直接返回
  if (screenShotController.value == null) {
    return;
  }
  //获取鼠标按下时的坐标
  const { moveStartX, moveStratY } = movePosition;
  //裁剪框边框节点事件存在 且 裁剪框未进行操作，则对鼠标样式进行修改
  if (cutOutBoxBorderArr.value.length > 0 && !draggingTrim.value) {
    //标识鼠标是否在裁剪框内
    let flag = false;
    //判断鼠标位置
    context.value.beginPath();
    for (let i = 0; i < cutOutBoxBorderArr.value.length; i++) {
      context.value.rect(
        cutOutBoxBorderArr[i].x,
        cutOutBoxBorderArr[i].y,
        cutOutBoxBorderArr[i].width,
        cutOutBoxBorderArr[i].height
      );
      //当前坐标点处于8个可操作点上，修改鼠标指针样式
      //暂时没写，以后补上
      if (context.value.isPointInPath(currentX, currentY)) {
        switch (cutOutBoxBorderArr[i].index) {
          case 1:
            break;
        }
        borderOption.value = cutOutBoxBorderArr[i].option;
        flag = true;
        break;
      }
    }
    context.value.closePath();
    if (!flag) {
      //鼠标移出剪裁框重置鼠标样式
      screenShotController.value.style.cursor = "default";
      borderOption.value = null;
    }
  }

  //裁剪框正在被操作
  if (draggingTrim.value) {
    //当前操作的节点为1时则为移动裁剪框
    if (borderOption.value === 1) {
      //计算要移动的x，y轴坐标
      const x = fixedData(
        currentX - (moveStartX - startX),
        width,
        screenShotController.value.width
      );
      const y = fixedData(
        currentY - (moveStratY - startY),
        height,
        screenShotController.value.width
      );
      //重新绘制裁剪框
      const tempObj = drawCutOutBox(
        x,
        y,
        width,
        height,
        context,
        borderSize,
        screenShotController,
        screenShotImageController
      );
      console.log(tempObj);
      tempGraphPosition.startX = tempObj.startX;
      tempGraphPosition.startY = tempObj.startY;
      tempGraphPosition.width = tempObj.width;
      tempGraphPosition.height = tempObj.height;
    }
  }
};
//处理数据的函数，处理传进来的数据，不让其移除可视区域
const fixedData = (
  data, //需要计算的数据
  trimDistance, //裁剪框的宽度
  canvasDistance //画布宽度
) => {
  if (nonNegativeData(data) + trimDistance > canvasDistance) {
    return nonNegativeData(canvasDistance - trimDistance);
  } else {
    return nonNegativeData(data);
  }
};
//非负数函数
const nonNegativeData = (data) => {
  return data > 0 ? data : 0;
};
//3.3.2绘制裁剪框
const drawCutOutBox = (
  mouseX, //鼠标X轴坐标
  mouseY, //鼠标Y轴坐标
  width, //裁剪框宽度
  height, //裁剪框高度
  context, //需要进行的canvas画布
  borderSize, //边框节点直径
  controller, //需要进行操作的canvas容器
  imageController //图片canvas容器
) => {
  //获取画布的宽高
  const canvasWidth = controller.value?.width;
  const canvasHeight = controller.value?.height;
  // console.log(canvasWidth, canvasHeight, imageController, controller);
  //画布、图片不存在：直接return
  if (!canvasWidth || !canvasHeight || !imageController || !controller) return;
  //清除画布
  context.value.clearRect(0, 0, canvasWidth, canvasHeight);

  //绘制蒙层
  context.value.save();
  context.value.fillStyle = "rgba(0,0,0,0.6)";
  context.value.fillRect(0, 0, canvasWidth, canvasHeight);
  //将蒙层凿开
  context.value.globalCompositeOperation = "source-atop"; //在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。这里目标图像是蒙层，源图像是新凿开部分
  //裁剪选择框
  context.value.clearRect(mouseX, mouseY, width, height);
  //绘制8个边框像素点并且保存坐标信息以及事件参数
  context.value.globalCompositeOperation = "source-over"; //默认。在目标图像上显示源图像。
  context.value.fillStyle = "#2CABFF";
  //像素点大小
  const size = borderSize;
  //绘制8个像素点
  context.value.fillRect(mouseX - size / 2, mouseY - size / 2, size, size);
  context.value.fillRect(
    mouseX - size / 2 + width / 2,
    mouseY - size / 2,
    size,
    size
  );
  context.value.fillRect(
    mouseX - size / 2 + width,
    mouseY - size / 2,
    size,
    size
  );
  context.value.fillRect(
    mouseX - size / 2 + width,
    mouseY - size / 2 + height / 2,
    size,
    size
  );
  context.value.fillRect(
    mouseX - size / 2 + width,
    mouseY - size / 2 + height,
    size,
    size
  );
  context.value.fillRect(
    mouseX - size / 2 + width / 2,
    mouseY - size / 2 + height,
    size,
    size
  );
  context.value.fillRect(
    mouseX - size / 2,
    mouseY - size / 2 + height,
    size,
    size
  );
  context.value.fillRect(
    mouseX - size / 2,
    mouseY - size / 2 + height / 2,
    size,
    size
  );
  //绘制结束
  context.value.restore();
  //使用drawImage将图片绘制到蒙层下方
  context.value.save();
  context.value.globalCompositeOperation = "destination-over"; //在源图像上显示目标图像。
  context.value.drawImage(
    imageController.value,
    0,
    0,
    controller.value?.width,
    controller.value?.hieght
  );
  context.value.restore();
  //返回裁剪框临时位置信息
  return {
    startX: mouseX,
    startY: mouseY,
    width: width,
    height: height,
  };
};
//4 实现下载功能
// 将裁剪框区域的内容放入一个新的canvas中，然后调用toDataURL的方法拿到图片的base64地址
//创建一个a标签，添加download属性，触发a标签的点击事件即可下载
const getCanvasImgData = (isSave) => {
  //获取裁剪区域位置信息
  const { startX, startY, width, height } = drawGraphPosition;
  let base64 = "";
  //保存图片，需要减去八个点的大小
  if (screenShortCanvas.value) {
    if (isSave) {
      //将canvas转化成图片
      saveCanvasToImage(screenShortCanvas.value, startX, startY, width, height);
    } else {
      //将canvas转换成base64
      //暂不支持此部分功能
      // base64 = saveCanvasToBase64(
      //   screenShortCanvas.value,
      //   startX,
      //   startY,
      //   width,
      //   height
      // );
    }
  }
};
const saveCanvasToImage = (context, startX, startY, width, height) => {
  //获取裁剪框区域图片信息
  const img = context.getImageData(startX, startY, width, height);
  //创建canvas标签，用于存放裁剪区域的图片
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  //获取裁剪框区域画布
  const imgContext = canvas.getContext("2d");
  if (imgContext) {
    //将图片放入裁剪框内
    imgContext.putImageData(img, 0, 0);
    const a = document.createElement("a");
    //获取图片
    a.href = canvas.toDataURL("png");
    //下载图片
    a.download = `${new Date().getTime()}.png`;
    a.click();
  }
};
</script>
<style scoped lang="scss" src="../../assets/scss/screen-short.scss"></style>
<style scoped>
.icon {
  width: 33px;
  height: 33px;
  overflow: hidden;
  fill: #767a7e;
}
.menu-item {
  width: 33px;
  height: 33px;
  margin: 5px 10px;
}
/* 截图区域css start */
#screenShotContainer {
  position: absolute;
  top: 0;
  left: 0;
  cursor: crosshair;
}
#toolPanel {
  height: 24px;
  background: #ffffff;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 275px;
  padding: 10px;
}
/* 截图工具栏区域css start */
.item-panel {
  width: 24px;
  height: 24px;
  margin-right: 15px;
  float: left;
}
.item-panel:last-child {
  margin-right: 0;
}

/* 截图工具栏区域css end */
/* 截图区域css end */
</style>