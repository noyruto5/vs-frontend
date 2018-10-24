<template>
  <div>
    <h2>Welcome to Login Page</h2>
<!-- @submit.prevent="login" -->
    <form autocomplete="off" >
      <div class="form-group">
        <label for="staff_name">Staff Name: </label>
        <input ref="dropdownMenu" type="text" v-model="staffName" v-on:keyup="searchStaffs" @click="visible=!visible" class="form-control" id="staff_name" placeholder="Enter name"><br/>
      </div>
      <div class="form-group">
        <label for="password">Password: </label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <div id="dropdown-menu" v-if="visible">
        <ul>
          <li v-for="(staff, index) in staffInfo" :key="index" @click="staffId=staff._id;staffName=staff.name;">{{ staff.name }}</li>
        </ul>
      </div>
    </form>
    <!-- <p>
      <router-link to="/">Home</router-link>
    </p> -->
  </div>
</template>

<script>
//import LoginService from '@/services/LoginService'

export default {
  name: 'LoginPage',
  data () {
    return {
      staffId: null,
      staffName: '',
      password: '',
      staffInfo: [],
      visible: false
    }
  },

  methods: {
    searchStaffs () {
      this.$loginStore.dispatch('getStaffInfo', this.staffName)
      this.staffInfo = this.$loginStore.state.staffInfo
      console.log(this.staffInfo)
    },

    // async login () {
    //   let loginRequest = { "credentials": { "_id": this.staffId, "password": this.password } }
    //   this.loginInfo = await LoginService.authenticate(loginRequest).then(response => {
    //     return response.data.data
    //   }).catch(error => {
    //     console.log(error)
    //   })

    //   if (this.loginInfo.success) {
    //     //localStorage.setItem('login-info', JSON.stringify(this.loginInfo))
    //     this.$router.push('/')
    //   } else if (this.loginInfo.success === false) {
    //     alert("Username or password is not correct.")
    //   }
    // },

    documentClick(e) {
      let el = this.$refs.dropdownMenu
      let target = e.target
      if ((el !== target) && !el.contains(target)) {
        this.visible = false
      }
    }
  },

  created () {
    document.addEventListener('click', this.documentClick)
  },

  destroyed () {
    document.removeEventListener('click', this.documentClick)
  }

}
</script>

<style scoped>
form {
  width: 500px;
  text-align: left;
  margin: auto;
  margin-top: 50px;
}
#dropdown-menu {
  margin-top: -150px;
  z-index: 1;
  position: absolute;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 500px;
    background-color: #f1f1f1;
}
li {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

/* Change the link color on hover */
li:hover {
    background-color: #555;
    color: white;
    cursor: pointer;
}
</style>

