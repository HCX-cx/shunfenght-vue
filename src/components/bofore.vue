<template>
    <div>
      <h2>后台管理</h2>
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>用户管理</template>
              <el-menu-item-group>
                <template slot="title">用户信息</template>
                <el-menu-item index="2-1">基本信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>车辆管理</template>
              <el-menu-item-group>
                <template slot="title">管理</template>
                <el-menu-item index="2-1">基本信息</el-menu-item>
                <el-menu-item index="2-2">1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-menu"></i>时效管理</template>
              <el-menu-item-group>
                <template slot="title">管理</template>
                <el-menu-item index="2-1">基本信息</el-menu-item>
                <el-menu-item index="2-2">1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-menu"></i>权限管理</template>
              <el-menu-item-group>
                <template slot="title">管理</template>
                <el-menu-item index="2-1">基本信息</el-menu-item>
                <el-menu-item index="2-2">1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-setting"></i>数据概览</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>XXX</span>
          </el-header>

          <el-main>
            <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
              <el-button type="primary" icon="el-icon-edit"></el-button>
              <el-button type="primary" icon="el-icon-delete"></el-button>
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<style>
  .el-header {
    background-color: #3336;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #999;
  }
  .el-submenu {
    background-color: blueviolet;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          date: '',
          name: '',
          address: '',
        }]
    }
  }
  }
</script>
