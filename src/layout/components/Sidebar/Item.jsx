/*使用vue3.0 jsx语法书写*/
import ElSvgItem from './ElSvgItem.vue'
export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    },
    meta: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    elIcon: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    /*此处写法像极了react*/
    const renderItem = () => {
      if (props.meta?.icon) {
        // console.log('我进入渲染了')
        // return <svg-icon icon-class={props.meta?.icon} className="nav-icon" />
        let iconClass = `iconfont icon-${props.meta?.icon}`
        return <i class={iconClass}/>
      }
    }
    return () => {
      return renderItem()
    }

  }
})
