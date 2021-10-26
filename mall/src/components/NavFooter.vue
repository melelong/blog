<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__secondary">
        <div class="footer__inner">
          <div class="footer__region">
            <span>语言</span>
            <select class="footer__region__select">
              <option value="zh-CN">中文</option>
              <option value="en-US">英文</option>
            </select>
          </div>
          <div class="footer__secondary__nav">
            <span>版权所有©2021 Mele保留所有权利.</span>
            <a href="http://beian.miit.gov.cn">粤ICP备2021058009号</a>
            <a href="#">
              关于我们
            </a>
            <a href="#">
              Terms &amp; Conditions
            </a>
            <a href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
  @media only screen and (max-width: 767px) {
    .footer__wrap{
      margin-bottom: 10vh;
    }
  }
</style>
