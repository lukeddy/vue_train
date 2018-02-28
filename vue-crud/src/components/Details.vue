<template>
  <div class="container">
    <div class="row">
      <router-link class="btn btn-link pull-right" to="/">后退</router-link>
    </div>
    <div class="row">
      <h3 class="page-header">客户'{{customer.first_name}} {{customer.last_name}}'信息</h3>
      <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> {{customer.phone}}</li>
        <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{customer.email}}</li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item"> {{customer.address}}</li>
        <li class="list-group-item">{{customer.city}}</li>
        <li class="list-group-item">{{customer.state}}</li>
      </ul>
    </div>
    <div class="row">
      <span class="pull-right">
            <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">修改</router-link>
            <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customerdetails',
  data () {
    return {
      customer: ''
    }
  },
  methods: {
    fetchCustomer (id) {
      this.$http.get('http://115.28.23.215:8081/api/customer/' + id)
        .then(function (response) {
          this.customer = response.body
        })
    },
    deleteCustomer (id) {
      this.$http.delete('http://115.28.23.215:8081/api/customer/delete/' + id)
        .then(function (response) {
          this.$router.push({path: '/', query: {alert: '删除客户资料成功！'}})
        })
    }
  },
  created: function () {
    this.fetchCustomer(this.$route.params.id)
  }
}
</script>
