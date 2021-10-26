<template>
  <div class="top" v-show="chang">
    <a href="javascript:;" @click="goTop">TOP</a>
  </div>
</template>

<script>
export default {
  name: 'NavTop',
  data () {
    return {
      msg: 'hello vue'
    }
  }
}
</script>
<style>
.top{
  transition: all .3s ease-out;
  z-index: 1;
  background-color: rgba(199, 196, 196, 0.5);
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  position:fixed;
  display: inline-block;
  border: 1px solid #ff7d1a;
  border-radius: 50%;
  border-top-left-radius: 5%;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.top a{
    display: block;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
.top a:hover{
  color: #ff7d1a;
}
@media screen and (min-width: 767px) {
  .top {
    width: 50px;
    height: 50px;
    line-height: 50px;
    top: 75%;
    right: 30px;
  }
}
@media screen and (max-width: 767px) {
  .top {
    right: 5%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    bottom: 15%;
  }
}
</style>
<script>
export default {
  name: 'NavTop',
  data () {
    return {
      msg: 'hello vue',
      chang:false
    }
  },
  mounted () {
    this.abc()
  },
  methods: {
    goTop(){
      var timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if(osTop === 0){
          clearInterval(timer);
        }
      },20)
    },
    handleScroll(){
      if (window.scrollY > 360) {
        this.chang = true
      } else {
        this.chang = false
      }
    },
    abc () {
      window.addEventListener('scroll', this.handleScroll,true)
    }
  }
}
</script>
