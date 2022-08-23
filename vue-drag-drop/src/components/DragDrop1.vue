<template>
  <div class="drag-drop-one">
    <div class="drop-zone"
         @drop="onDrop($event, 1)"
         @dragover.prevent
         @dragenter.prevent
    >
      <div v-for="item in listOne"
           :key="item.id"
           class="drag-el"
           draggable
           @dragstart="startDrag($event, item)">
        <p class="draggable" ><strong> {{ item.event }} </strong> - {{ item.description }} </p>
      </div>
    </div>

    <div class="drop-zone"
         @drop="onDrop($event, 2)"
         @dragover.prevent
         @dragenter.prevent
    >
      <div v-for="item in listTwo"
           :key="item.id"
           class="drag-el"
           draggable
           @dragstart="startDrag($event, item)">
        <p class="draggable" ><strong> {{ item.event }} </strong> - {{ item.description }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DragDrop1",
  data() {
    return {
      items: [
        {
          id: 0,
          event: 'drag',
          description: 'a dragged item is dragged',
          list: 1,
        },
        {
          id: 1,
          event: 'dragstart',
          description: 'start dragging a draggable element',
          list: 1,
        },
        {
          id: 2,
          event: 'dragend',
          description: ' a drag ends (e.g. let go of the mouse)',
          list: 1,
        },
        {
          id: 3,
          event: 'dragenter',
          description: ' a dragged item enters a droppable element',
          list: 2,
        },
        {
          id: 4,
          event: 'dragleave',
          description: 'a dragged item is dragged',
          list: 2,
        },
        {
          id: 5,
          event: 'dragover',
          description: 'a dragged item is moved over a droppable element (calls every hundred milliseconds or so)',
          list: 2,
        },
        {
          id: 6,
          event: 'drop',
          description: 'a dragged item is dropped on a droppable element',
          list: 2,
        },
      ],
    }
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
  },
}
</script>

<style scoped>
.drop-zone {
  background-color: #696969;
  margin-bottom: 10px;
  padding: 10px;
}
.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
