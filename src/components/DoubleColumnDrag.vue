<template>
  <div ref="dragBox" class="drag-box">
    <div ref="dragBoxLeft" class="drag-side">
      <slot name="leftBox">默认信息</slot>
      <!-- 拖拽条 -->
      <div class="resize" ref="resizeButton" />
    </div>
    <div ref="dragBoxRight" class="drag-side">
      <slot name="rightBox">默认信息</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoubleColumnDrag",
  mounted() {
    this.setDragItemFlex();
  },
  methods: {
    //  没有定义宽度，则flex=1
    setDragItemFlex() {
      const dragBoxRight = this.$refs["dragBoxRight"];
      if (!dragBoxRight.style.width) {
        dragBoxRight.style.flex = "1";
      }
      const resizeButton = this.$refs["resizeButton"];
      resizeButton.addEventListener("mousedown", this.onMouseDown);
    },
    onMouseDown(e) {
      this.resizeBox = e.target;
      this.currentBox = e.target.parentNode; // 当前盒子
      this.rightBox = this.getNextElement(this.currentBox); // 当前盒子下个兄弟节点
      if (!this.rightBox) return;
      this.curLen = this.currentBox.clientWidth;
      this.otherBoxWidth =
        this.$refs["dragBox"].clientWidth -
        this.currentBox.clientWidth -
        this.rightBox.clientWidth; // 其他盒子的宽度
      // 颜色改变提醒
      e.target.style.background = "red";
      this.startX = e.clientX;
      document.addEventListener("mousemove", this.onMousemove);
      document.addEventListener("mouseup", this.onMouseup);
    },
    // 获取下一个兄弟元素的兼容函数
    getNextElement(element) {
      if (element.nextElementSibling) {
        return element.nextElementSibling;
      } else {
        let next = element.nextSibling; // 下一个兄弟节点
        while (next && next.nodeType !== 1) {
          // 有 并且 不是我想要的
          next = next.nextSibling;
        }
        return next;
      }
    },
    onMousemove(e) {
      const endX = e.clientX;
      const moveLen = endX - this.startX; // （endX-starX）= 移动的距离
      const CurBoxLen = this.curLen + moveLen; // resizeButton.left+移动的距离=左边区域最后的宽度
      const rightBoxLen =
        this.$refs["dragBox"].clientWidth - CurBoxLen - this.otherBoxWidth; // 右侧宽度=总宽度-左侧宽度-其它盒子宽度
      // 当最小宽度时，无法继续拖动
      if (CurBoxLen <= 200 || rightBoxLen <= 200) return;
      this.currentBox.style.width = CurBoxLen + "px"; // 当前盒子的宽度
      e.target.style.left = CurBoxLen; // 设置左侧区域的宽度
      this.rightBox.style.width = rightBoxLen + "px";
    },
    onMouseup() {
      // 颜色恢复
      this.resizeBox.style.background = "yellow";
      document.removeEventListener("mousedown", this.onMouseDown);
      document.removeEventListener("mousemove", this.onMousemove);
    },
  },
};
</script>

<style scoped>
.drag-box {
  display: flex;
  width: 100%;
  height: 100%;
}
.drag-side {
  min-width: 200px;
  width: 50rem;
  position: relative;
}
.resize {
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
  cursor: col-resize;
  background-color: skyblue;
}
</style>
