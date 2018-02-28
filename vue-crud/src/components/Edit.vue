<template>
  <div class="container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">更新客户资料</h1>
    <form v-on:submit="updateCustomer">
        <div class="col-md-4">
          <div class="well">
            <h4>基本信息</h4>
            <div class="form-group">
              <label>名字</label>
              <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
            </div>
            <div class="form-group">
              <label>姓氏</label>
              <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="well">
            <h4>联系方式</h4>
            <div class="form-group">
              <label>邮箱</label>
              <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
            </div>
            <div class="form-group">
              <label>电话</label>
              <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="well">
            <h4>住址信息</h4>
            <div class="form-group">
              <label>详细地址</label>
              <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
            </div>
            <div class="form-group">
              <label>所在城市</label>
              <input type="text" class="form-control" placeholder="City" v-model="customer.city">
            </div>
            <div class="form-group">
              <label>所在省份</label>
              <input type="text" class="form-control" placeholder="State" v-model="customer.state">
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">修改</button>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  data () {
    return {
      customer: {},
      alert: ''
    }
  },
  methods: {
    fetchCustomer (id) {
      this.$http.get('http://115.28.23.215:8081/api/customer/' + id)
        .then(function (response) {
          this.customer = response.body
        })
    },
    updateCustomer (e) {
      if (!this.customer.first_name || !this.customer.last_name || !this.customer.email) {
        this.alert = '名字，姓氏和邮箱是必填项'
      } else {
        let updCustomer = {
          first_name: this.customer.first_name,
          last_name: this.customer.last_name,
          phone: this.customer.phone,
          email: this.customer.email,
          address: this.customer.address,
          city: this.customer.city,
          state: this.customer.state
        }

        this.$http.put('http://115.28.23.215:8081/api/customer/update/' + this.$route.params.id, updCustomer)
          .then(function (response) {
            this.$router.push({path: '/', query: {alert: '更新客户信息成功！'}})
          })

        e.preventDefault()
      }
      e.preventDefault()
    }
  },
  created: function () {
    this.fetchCustomer(this.$route.params.id)
  },
  components: {
    Alert
  }
}
</script>
