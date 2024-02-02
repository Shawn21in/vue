<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-4 px-xs-2">
      <h2 class="text-center title mb-5 mt-lg-5">活動Q&A</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 px-xl-3 mx-auto">
        <div class="w-100 accordion collapse-set mb-lg-5" id="accordion">
          <div
            class="accordion-item"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <!-- v-for="item in dataList"
            :key="item.Id" -->
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#collapse-${index}`"
                aria-expanded="false"
                :aria-controls="`collapse-${index}`"
              >
                <!--上面可改成 
                :data-bs-target="`#collapse-${item.Id}`" -->
                Q{{ index + 1 }}.{{ item.title }}
                <!-- 索引值由0開始所以要+1 -->
              </button>
            </h2>
            <div
              :id="`collapse-${index}`"
              class="accordion-collapse collapse"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <ul class="custom-list">
                  <li v-html="item.content"></li>
                </ul>
              </div>
            </div>
          </div>
          <!--accordion-item-->

          <!--accordion-item-->
        </div>
        <!--#accordion-->
        <p class="text-center sm-title px-lg-0 px-xs-3">
          若您有任何疑問， 請直接來電至服務專線： 0800-000000，謝謝！<br />(服務時間：週一至週五，正常上班時間上午9:00至下午5:00)
        </p>
      </div>
      <!--col-->
    </section>
  </article>
</template>
<script>
import axios from "axios";
import Qa from "@/service/Qa";

export default {
  //所有要輸出的網頁就要寫在export default裡面
  name: "Qa",
  //所有與網頁互動或要將資料呈現在網頁中,都要寫在data()中,data()名稱不可改
  data() {
    return {
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
    //async 與 await搭配,非同步到後端取資料
    async getList1() {
      //將後端取回的資料暫時存在res中(名稱可自訂,不一定要用res)
      const res = await axios("http://localhost:8000/api/" + Qa.getList);
      //這裡的Qa.getList是service資料夾裡的Qa.js內的getList
      //後端取回來的資料會也在data中
      //取回資料後,存回dataList, this.dataList為data()中的dataList
      //通常判斷有沒有存取成功是判斷狀態馬是不是200
      console.log(res);
      if (res.status == 200) {
        //這裡的.status狀態碼 F12console看的到.status會等於200
        this.dataList = res.data;
      }
    },
  },
};
</script>
