<template>
  <div id="app">
    <div class="header">
      <div>TITLE</div>
      <div class="pageBtns">
        <PageButtons v-for="num in nums" :key="num" :name="num.name" :route="num.route"  />
      </div>
    </div>

    <div class="body">
      <div class="sectionGr">
        <div class="menu">Menu</div>
        <div class="sectionBtns">
          <SectionButtons v-for="secNum in secNums" :key="secNum" :secNum="secNum"/>
        </div>
        
      </div>
      <div class="pageContent">
        <RouterView />
      </div>
    </div>

    <div class="footer">
      FOOTER
    </div>
  </div>
</template>

<script>
import PageButtons from './components/PageButtons.vue';
import SectionButtons from './components/SectionButtons.vue';
import Page1View from './views/Page1View.vue';

export default {
  name: "App",
  components: {
    PageButtons,
    SectionButtons,
    Page1View,
  },

  data() {
    return {
      nums: [
        { name: "1", route: "/" },
        { name: "2", route: "/page2" },
        { name: "3", route: "/page3" },
      ], 
      secNums: [1, 2, 3], 
    };
  },

};
</script>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  margin: 10%;
  border: solid 3px;
}

.header{
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border: solid 1px;
}

.sectionGr{
  display: flex;
  flex-direction: column;
  border: solid 1px;
  /* justify-content: center;
  align-items: center; */
}

.body{
  width: 100%;
  display: flex;
  border: solid 1px;
  /* justify-content: space-between; */
}

.sectionBtns{
  display: flex;
  flex-direction: column;
}

.pageContent{
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px;
}

.footer{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px;
}

.menu{
  margin: 10px;
}

</style>