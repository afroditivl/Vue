<template>
  <el-dialog type="warning" title="Διαχείριση Προμηθευτή" :visible="visible" :modal="true"
             :close-on-click-modal="false"
             :close-on-press-escape="false" :modal-append-to-body="false" :show-close="false" width="75%"
             @close="clearValidation">

    <el-card>
      <el-form ref="supplierForm" :model="supplier" :rules="rules" label-position="top">

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Εισάγετε το όνομα"
                          prop="firstName">
              <el-input v-model="supplier.firstName"
                        placeholder="Όνομα"
                        autoComplete="firstName">
              </el-input>
            </el-form-item>
            <el-form-item label="Εισάγετε το επίθετο"
                          prop="lastName">
              <el-input v-model="supplier.lastName"
                        placeholder="Επίθετο"
                        autoComplete="lastName">
              </el-input>
            </el-form-item>
            <el-form-item label="Εισάγετε τη διεύθυνση"
                          prop="address">
              <el-input v-model="supplier.address"
                        placeholder="Διεύθυνση"
                        autoComplete="address">
              </el-input>
            </el-form-item>
            <el-form-item label="Εισάγετε την πόλη"
                          prop="city">
              <el-input v-model="supplier.city"
                        placeholder="Πόλη"
                        autoComplete="city">
              </el-input>
            </el-form-item>
            <el-form-item label="Εισάγετε την επωνυμία της Εταιρείας"
                          prop="companyName">
              <el-input v-model="supplier.companyName"
                        placeholder="Επωνυμία Εταιρείας"
                        autoComplete="companyName">
              </el-input>
            </el-form-item>
            <el-form-item label="Εισάγετε την χώρα"
                          prop="country">
              <el-input v-model="supplier.country"
                        placeholder="Χώρα"
                        autoComplete="country">
              </el-input>
            </el-form-item>
            <el-form-item label="Εισάγετε την Δ.Ο.Υ."
                          prop="irsOffice">
              <el-input v-model="supplier.irsOffice"
                        placeholder="Δ.Ο.Υ."
                        autoComplete="irsOffice">
              </el-input>
            </el-form-item>
            <el-form-item label="Εισάγετε τον Α.Φ.Μ."
                          prop="vatNumber">
              <el-input v-model="supplier.vatNumber"
                        placeholder="Α.Φ.Μ."
                        autoComplete="vatNumber">
              </el-input>
            </el-form-item>
            <el-form-item label="Εισάγετε τον Τ.Κ."
                          prop="zipCode">
              <el-input v-model="supplier.zipCode"
                        placeholder="Τ.Κ."
                        autoComplete="zipCode">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row>
        <el-col style="text-align: right">
          <el-button type="success"
                     @click="save"> Αποθήκευση
          </el-button>

          <el-button type="danger"
                     @click="confirmDelete"
                     :disabled="!isDeletable"> Διαγραφή
          </el-button>
        </el-col>
      </el-row>
    </el-card>
    <div slot="footer" class="dialog-footer card-footer">
      <el-button type="warning"
                 @click="cancel"> Επιστροφή
      </el-button>
    </div>
  </el-dialog>
</template>
<script src="./SupplierVM.js"></script>
