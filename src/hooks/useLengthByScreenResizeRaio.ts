import { ref } from 'vue'
import _ from 'lodash'

/**
 * 传入的宽度或跟随浏览器窗口同比放大和缩小
 * @param h 传入高度
 * @param w 传入宽度
 * @returns
 */
export const useScreenLengthRef = ({ height: h = 0, width: w = 0 }) => {
  const height = ref(h)
  const width = ref(w)
  const heightRatio = h / 970
  const widthRatio = w / 1920
  height.value = Math.floor(window.innerHeight * heightRatio)
  width.value = Math.floor(window.innerWidth * widthRatio)

  const screenChangeHandler = () => {
    height.value = Math.floor(window.innerHeight * heightRatio)
    width.value = Math.floor(window.innerWidth * widthRatio)
    // console.log(height.value)
    // console.log(width.value)
  }
  window.addEventListener('resize', _.throttle(screenChangeHandler, 100))
  return {
    height,
    width,
  }
}
