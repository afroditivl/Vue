<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <div class="row">
        <div class="col-lg-12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Προμηθευτές</span>
            </div>
            <el-row>
              <el-col :span="5">
                <el-input
                  v-model="query"
                  placeHolder="Search"
                  autocomplete="name">
                </el-input>
              </el-col>
              <!--      <el-col :span="0.2">-->
              <!--        <div> </div>-->
              <!--      </el-col>-->
              <el-col :span="5">
                <el-button
                  class="el-button--primary"
                  @click="refreshSuppliers()">Search
                </el-button>
              </el-col>
            </el-row>
            <el-table
              :data="suppliers"
              stripe
              style="width: 100%"
              @selection-change="onSupplierSelected">
              <el-table-column
                v-for="(field, index) in fields"
                v-bind:key="index"
                :prop="field.name"
                :label="field.title"
                :sortable="true">
              </el-table-column>
              <el-table-column
                label="Operations" width="100">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    class="el-button--warning"
                    @click="onSupplierSelected(scope.row)">Edit
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="text-align: right; margin-top: 1em">
              <el-button
                class="el-button--success"
                @click="createSupplier">
                Δημιουργία
              </el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <supplier></supplier>
  </div>
</template>
<script src="./SuppliersVM.js"></script>
