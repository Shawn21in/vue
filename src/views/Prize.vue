<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-5 px-xs-3">
      <h2 class="text-center title mb-5 mt-lg-5">中獎專區</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 mx-auto">
        <div class="gw mb-lg-5">
          <div class="css-dropdown">
            <input type="checkbox" id="drop" hidden />
            <label for="drop"></label>
            <!-- <div class="inner"> -->
            <!-- 資料庫抓回來的值在下方的程式丟進dataList
              在這邊將dataList丟進item -->
            <!-- <span v-for="item in dataList" :key="item.d">
                <a
                  :class="Id == item.Id ? 'active' : ''"
                  v-on:click="say(item.title)"
                  >第{{ item.Id }}獎</a
                >
              </span>
            </div> -->
            <div class="inner">
              <span v-for="item in dataList" :key="item.Id">
                <a
                  href="#"
                  :class="Id == item.Id ? 'active' : ''"
                  @click="getPrize(item.Id, item.num, item.content, item.photo)"
                  >第{{ item.Id }}獎</a
                >
              </span>
            </div>
            <!--inner-->
          </div>
          <!--css-dropdown-->
        </div>
        <!--w-100-->
        <div class="gw img-wrap img-auto pb-5 text-center mt-3">
          <!-- <h3 class="sub-title">{{ testt }}</h3> -->
          <h3 class="sub-title">{{ content }}共{{ num }}名</h3>
          <!-- <img :src="{{ photo }}"> -->
          <img :src="url + 'images/prize/' + photo" alt="" />
          <!--w-100-->

          <!-- 文字編輯器 start-->
          <div class="editor_box">
            <div class="table-responsive">
              <div id="showMsg"></div>
            </div>
          </div>
          <!-- 文字編輯器 end-->
        </div>
        <!--img-wrap-->
      </div>
      <!--col-->
    </section>
  </article>
</template>

<script>
import axios from "axios";
import Prize from "@/service/Prize";

export default {
  //所有要輸出到網頁就要寫在export default裡面
  name: "Prize",
  //所有與網頁互動或要將資料呈現在網頁中,都要寫在data()中,data()名稱不可改
  data() {
    //所有要丟的資料都要放在data()裡面
    return {
      testt: "abc",
      Id: "",
      content: "下午實作",
      photo: "",
      num: "",
      url: this.$urltest,
      //return固定寫法
      // 這個變數名稱可以自己設定,不一定要使用dataList
      // 因為從後端取回的資料可能多筆,所以要用陣列方式儲存
      dataList: [],
      // userName: "", 一筆寫法將資料丟進userName:
      // email: "",
    };
  },
  //mounted() : 當網頁載入時要啟動或執行的事項,可寫在這裡
  mounted() {
    //this:這個物件,這裡指的是下面methods中的function名稱
    this.getList1();
  },
  //methods : 所有使執行的function都寫在這裡

  methods: {
    say(message) {
      this.testt = message;
      //alert(message);
    },
    //async 與 await搭配,非同步到後端取資料
    async getList1() {
      //將後端取回的資料暫時存在res中(名稱可自訂,不一定要用res)
      const res = await axios(this.$basetest + Prize.getList);
      //這裡的Qa.getList是service資料夾裡的Qa.js內的getList
      //後端取回來的資料會也在data中
      //取回資料後,存回dataList, this.dataList為data()中的dataList
      //通常判斷有沒有存取成功是判斷狀態馬是不是200
      console.log(res);
      if (res.status == 200) {
        //這裡的.status狀態碼 F12console看的到.status會等於200
        this.dataList = res.data;
        this.Id = res.data[0].Id;
        this.content = res.data[0].content;
        this.photo = res.data[0].photo;
        this.num = res.data[0].num;
      }
    },
    //getPrize(ids, num, content, photo) {
    getPrize(ids) {
      if (ids != "") {
        // this.Id = ids;
        // this.content = content;
        // this.num = num;
        // this.photo = photo;

        /*
        從dataList中尋找所選取的資料(用id來尋找)
        ids: 所選取的id(也就是選取的哪個獎項)
        如果dataList中發現id與所選取的id相同,將獎項資料存在prize變數中
        箭頭函數(式) : 例如function test() ==> test()==>()*/

        const prize = this.dataList.find(({ Id }) => Id == ids);
        this.Id = prize.Id;
        this.content = prize.content;
        this.num = prize.num;
        this.photo = prize.photo;
      }
    },
  },
};
</script>
