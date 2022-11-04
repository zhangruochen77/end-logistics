<template>
    <div>
        <Header/>

        <div class="body">
            <div class="body-goods">
                <div class="search-class">
                    <!-- 输入框输入查找 -->
                    <div class="search-input-class">
                        <el-input style="width: 90%" v-model="input" placeholder="请输入想要查找的商品"/>
                        <el-button style="width: 10%" plain>
                            <el-icon style="vertical-align: middle">
                                <Search/>
                            </el-icon>
                        </el-button>
                    </div>

                    <!-- 分页操作 -->
                    <div class="search-page-class">
                        <el-row :gutter="24">
                            <el-col :span="12">
                                <el-form-item label="价格区间">
                                    <el-input class="price-class" v-model="input" placeholder="起始区间"/>
                                    <el-input class="price-class" v-model="input" placeholder="结束区间"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item>
                                    <el-pagination
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :current-page="currentPage4"
                                            :page-sizes="[5, 200, 300, 400]"
                                            :page-size="100"
                                            layout="total, sizes, prev, pager, next, jumper"
                                            :total="400">
                                    </el-pagination>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </div>

                <!-- 商品展示页面 -->
                <div class="goods-class">
                    <div class="goods-info">

                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>

    import Header from "@/views/Header";
    import Footer from "@/views/Footer";

    export default {
        name: "Home",
        components: {Footer, Header},
        data() {
            return {}
        },
        created() {

        },
        methods: {}
    }
</script>

<style scoped>
    .body {
    }

    .body-goods {
        width: 70%;
        margin: 0 auto;
        /*background-color: #aaaaaa;*/
    }

    .search-class {
        margin-top: 30px;
    }

    .search-input-class {
        width: 50%;
        margin: 0 auto;
    }

    .search-page-class {
        margin-top: 20px;
        width: 98%;
        border: 1px solid #d8d8d8;
        height: 35px;
        padding-left: 2%;
    }

    .price-class {
        width: 30%;
        margin: 1px 10px 0 0;
    }

    .goods-class {
        background-color: #f5f5f5;
        height: 500px;
        margin-top: 20px;
    }

    .goods-info {
        width: 20%;
        height: 350px;
        background-color: #409eff;
    }


</style>