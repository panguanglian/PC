<template>
  <div>
    <script :id="id" type="text/plain"></script>
  </div>
</template>

<script>
//   import AppConfig from '@/config'

import "../../../static/ueditor/ueditor.all.js";
import "../../../static/ueditor/ueditor.config.js";
import "../../../static/ueditor/lang/zh-cn/zh-cn.js";
import "../../../static/ueditor/ueditor.parse.min";
export default {
  name: "UEditor",
  props: {
    id: {
      type: String
    },
    config: {
      type: Object
    }
  },
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    //初始化UE
    const _this = this;
    this.editor = UE.getEditor(this.id, this.config);
  },
  methods: {
    getUEContent: function() {
      return this.editor.getContent();
    },
    setUEContent: function(val) {
      this.editor.setContent(val);
    },
    ueDestoryed: function() {
      UE.delEditor(this.id);
    }
  }
};
</script>