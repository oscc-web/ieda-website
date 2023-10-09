<template>
    <div>
        <el-carousel
            height="550px"
            initial-index="0"
            trigger="hover"
            autuplay="true"
            interval="8000"
            indicator-position=""
            arrow="never"
            type=""
            loop="true"
            direction="horizontal"
            pause-on-hover="true">
            <el-carousel-item>
                <el-container>
                    <el-main>
                        <el-text>图片1</el-text>
                    </el-main>
                    <el-footer>
                        <el-button
                            size="large"
                            type="primary"
                            tag="a"
                            href="/project/intro.html"
                            rel="noopener noreferrer">项目介绍
                        </el-button>
                        <el-button
                            size="large"
                            type="danger"
                            tag="a"
                            href="/project/team.html"
                            rel="noopener noreferrer">团队介绍
                        </el-button>
                    </el-footer>
                </el-container>
            </el-carousel-item>
            <el-carousel-item>
                <el-container>
                    <el-main>
                        <el-text>图片2</el-text>
                    </el-main>
                    <el-footer>
                        <el-button
                            size="large"
                            type="primary">EDA知识
                        </el-button>
                        <el-button
                            size="large"
                            type="danger">实践训练
                        </el-button>
                    </el-footer>
                </el-container>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
    .el-main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 470px;
        .el-text {
            font-size: 25px;
        }
    }
    .el-footer {
        display: flex;
        justify-content: center;
    }
    .el-button {
        width: 150px;
        font-size: var(--el-font-size-medium);
        + .el-button {
            margin-left: 30px;
        }
    }
</style>