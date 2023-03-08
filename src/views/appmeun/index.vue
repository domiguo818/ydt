<script lang="ts" setup>
import { IconList, IconDown, IconUser } from "@arco-design/web-vue/es/icon";
import { getOrgList, getList } from "../../api/appmeau";
import { useRouter } from "vue-router";
import FakeSearch from "../../components/FakeSearch.vue";
import { ref, computed } from "vue";
import { Search, InfoFilled } from "@element-plus/icons-vue";
// 列表
const tablist = ref([]);
const getListFn = async () => {
  const res: any = await getList();
  console.log(res);
  tablist.value = res.list;
};
getListFn();
// 筛选checkbox
const checkAll = ref(true);
const checkAll2 = ref(true);
const checkAll3 = ref(true);
const checkAll4 = ref(true);
const checkAll5 = ref(true);
// const isIndeterminate = ref(false);
const checkedCities = ref([]);
const checkedCities2 = ref([]);
const checkedCities3 = ref([]);
const checkedCities4 = ref([]);
const checkedCities5 = ref([]);
const cities = [
  "党政机关整体智治",
  "数字政府",
  "数字经济",
  "数字社会",
  "数字法制",
  "数字文化",
];
const cities2 = [
  "浙里办",
  "浙政钉",
  "数字改革门户",
  "支付宝",
  "微信",
  "网页",
  "pc客户端",
  "app端",
];
const cities3 = [
  "办公类",
  "业务办理类",
  "门户网站",
  "宣传微博/微信公众号",
  "硬件类",
  "工具类",
  "其他",
];
const cities4 = [
  "建设中",
  "运行中",
  "已停用",
  "功能变更中",
  "其他",
  "申报中",
  "谋划中",
];
const cities5 = ["是", "否"];
const handleCheckAllChange = (val: boolean) => {
  console.log(val);

  checkedCities.value = val ? [] : cities;
};
const handleCheckAllChange2 = (val: boolean) => {
  checkedCities2.value = val ? [] : cities2;
};
const handleCheckAllChange3 = (val: boolean) => {
  checkedCities3.value = val ? [] : cities3;
};
const handleCheckAllChange4 = (val: boolean) => {
  checkedCities4.value = val ? [] : cities4;
};
const handleCheckAllChange5 = (val: boolean) => {
  checkedCities5.value = val ? [] : cities5;
};
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount < 1;
};
const handleCheckedCitiesChange2 = (value: string[]) => {
  const checkedCount = value.length;
  checkAll2.value = checkedCount < 1;
};
const handleCheckedCitiesChange3 = (value: string[]) => {
  const checkedCount = value.length;
  checkAll3.value = checkedCount < 1;
};
const handleCheckedCitiesChange4 = (value: string[]) => {
  const checkedCount = value.length;
  checkAll4.value = checkedCount < 1;
};
const handleCheckedCitiesChange5 = (value: string[]) => {
  const checkedCount = value.length;
  checkAll5.value = checkedCount < 1;
};
// 标签
const inputValue = ref("");
// const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof ElInput>>();

const handleClose = (tag: string) => {
  console.log(tag);
  checkedCities.value = checkedCities.value.filter((item) => item !== tag);
  checkedCities2.value = checkedCities2.value.filter((item) => item !== tag);
  checkedCities3.value = checkedCities3.value.filter((item) => item !== tag);
  checkedCities4.value = checkedCities4.value.filter((item) => item !== tag);
  checkedCities5.value = checkedCities5.value.filter((item) => item !== tag);
};
let dynamicTags = computed(() => {
  return checkedCities.value.concat(
    checkedCities2.value,
    checkedCities3.value,
    checkedCities4.value,
    checkedCities5.value
  );
});
// 树形数据
// const dataList = ref();
const data = ref<Tree[]>();
// const data = ref();
const router = useRouter();
const getOrgListFn = async () => {
  const res: any = await getOrgList();
  console.log(res);
  data.value = res[1].children[1].children[0].children;
  console.log(data);
};
getOrgListFn();

const input = "";

const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
const select = ref("");
interface Tree {
  label: string;
  children?: Tree[];
}

const handleNodeClick = (data: Tree) => {
  console.log(data);
};

const defaultProps = {
  children: "children",
  label: "name",
};
</script>

<template>
  <div class="nav">
    <span class="title">临安区一体化智能化公共数据平台</span>
    <span>郭路</span>
  </div>
  <div class="miancontainer">
    <div class="sidebar">
      <h3>行政区划</h3>
      <div class="mt-4">
        <el-input
          v-model="input3"
          placeholder="搜索目录分类"
          class="input-with-select"
        >
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
        />
      </div>
    </div>
    <div class="layout">
      <h3>应用目录</h3>
      <div class="filterarea">
        <div class="checkitem">
          <span>应用领域</span>
          <el-checkbox v-model="checkAll" @change="handleCheckAllChange"
            >全部</el-checkbox
          >
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="city in cities" :key="city" :label="city">{{
              city
            }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="checkitem">
          <span>发布端</span>
          <el-checkbox v-model="checkAll2" @change="handleCheckAllChange2"
            >全部</el-checkbox
          >
          <el-checkbox-group
            v-model="checkedCities2"
            @change="handleCheckedCitiesChange2"
          >
            <el-checkbox v-for="city in cities2" :key="city" :label="city">{{
              city
            }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="checkitem">
          <span>应用类型</span>
          <el-checkbox v-model="checkAll3" @change="handleCheckAllChange3"
            >全部</el-checkbox
          >
          <el-checkbox-group
            v-model="checkedCities3"
            @change="handleCheckedCitiesChange3"
          >
            <el-checkbox v-for="city in cities3" :key="city" :label="city">{{
              city
            }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="checkitem">
          <span>搜索</span>
          <div class="searcharea">
            <el-input v-model="input" placeholder="请输入关键词" />
            <el-button type="primary">搜索</el-button>
            <el-button>重置</el-button>
          </div>
        </div>
        <div class="selected" v-if="dynamicTags.length >= 1">
          <span class="yxtj">已选条件</span>
          <div>
            <el-tag
              v-for="tag in dynamicTags"
              :key="tag"
              class="mx-1"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
          </div>
        </div>
      </div>
      <div class="totalres">
        <div style="font-size: 20px">
          <!-- 由于SVG图标默认不携带任何属性 -->
          <!-- 你需要直接提供它们 -->

          <Search style="width: 0.7em; height: 0.7em; margin-right: 8px" />
          <InfoFilleds style="width: 1em; height: 1em; margin-right: 8px" />
        </div>
        <span>检索结果</span>
      </div>
      <div class="tablist">
        <div v-for="item in tablist" :key="item" class="listitem">
          <div class="title">
            <span class="tbcn">{{ item.appName }}</span>
            <span class="bluetag">重大应用</span>
          </div>
          <div class="datafrom">
            <span
              ><span class="xuti">单位名称：</span
              >{{ item.constructDept2 }}</span
            >
            <span><span class="xuti">建设层级</span>{{ item.constructLevel }}</span>
            <span
              ><span class="xuti">更新频次：</span>{{ item.frequency }}</span
            >
          </div>
          <div class="desc">
            <span class="xuti"> 描述：</span><span>{{ item.description }}</span>
          </div>

          <div class="detailbtn">
            <el-button type="primary" size="mini">查看详情</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$design_width: 720; //设计稿的宽度，根据实际项目调整
$design_height: 450; //设计稿的高度，根据实际项目调整

@function px2rem($px) {
  $design_font_size: 12;
  @return ($px/$design_font_size) + rem;
}
.screen-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: aqua;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .screen {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: px2rem($design_width);
    height: px2rem($design_height);
    background: pink;
    .section {
      height: px2rem(200);
      width: px2rem(200);
      border: 1px solid #000;
      line-height: px2rem(200);
      font-size: px2rem(100);
      margin: px2rem(20);
      text-align: center;
      display: inline-block;
    }
  }
}
.nav {
  width: 100%;
  height: px2rem(45);
  background: #2960de;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  // margin-bottom: px2rem(45);

  .title {
    line-height: px2rem(45);
    font-size: 20px;
    color: #ffffff;
    font-weight: 600;
  }
}
.miancontainer {
  margin-top: px2rem(45);
  height: calc(100vh - (px2rem(90)));
  width: 100%;
  display: flex;
  //   background: blue;
  .sidebar {
    width: 15%;
    min-height: 100%;
    overflow: scroll;
    // background: red;
    padding: 15px;
    h3 {
      margin-bottom: 10px;
    }
    .el-input__wrapper {
      margin-bottom: 10px !important;
    }
  }
  .layout {
    width: 85%;
    height: 100%;
    background: #f7f8fa;
    padding: 20px;
    h3 {
      margin-bottom: 15px;
    }
    .filterarea {
      padding: 10px;
      background-color: #fff;

      .checkitem {
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 10px;
        span {
          width: 80px;
        }

        .searcharea {
          display: flex;
          ::v-deep .el-input__wrapper {
            margin-right: 10px !important;
          }
        }
      }
      .selected {
        display: flex;
        align-items: center;
        margin: 10px;
        .yxtj {
          width: 80px;
        }
        .el-tag.is-closable {
          padding-right: 5px;
          margin-right: 5px;
        }
      }
    }
    .totalres {
      display: flex;
      align-items: center;
      width: 100%;
      height: px2rem(30);
      background-color: #ebf7ff;
      margin-bottom: 20px;
    }
    .tablist {
      font-size: 14px;
      // div {
      //   margin-bottom: 10px;
      // }
      // background: #ffffff;
      // padding: 20px;
      .title {
        display: flex;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 22px;
        margin-bottom: 10px;
        .tbcn {
          margin-right: 10px;
        }
        .bluetag {
          font-size: 10px;
          color: rgb(0, 125, 241);
          padding: 1px 3px;
          background-color: #f2f8fe;
        }
      }
      .listitem {
        padding: 15px;
        display: flex;

        background: #ffffff;
        margin-bottom: 10px;
        flex-direction: column;
        align-items: flex-start;

        .datafrom {
          margin-left: 50px;
          .xuti {
            margin-right: 5px;
          }
          span {
            margin-right: 30px;
          }
          margin-bottom: 10px;
        }
        .desc {
          margin-left: 50px;
          margin-bottom: 10px;
        }
        .detailbtn {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .tagbtn {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding-right: 50px;
          div {
            margin-left: 50px;
            width: 105px;
            height: 24px;
            background: #ebf8f1;
            width: 89px;
            // height: 18px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #34b770;
            line-height: 24px;
            padding: 0 5px;
            border-radius: 4px;
          }
        }
      }
    }
  }
}

/* 复选框去掉前面的方框 */
::v-deep .el-checkbox__inner {
  border: none;
  width: 0;
}
</style>
