export default {
  methods: {
    getUser: function ( ) {
      let user_id =  sessionStorage.getItem('uid')
      if( user_id== null){
        layui.layer.alert('请登录');
        this.$router.push({name : 'Login'})
      }
      return {
        uid : user_id,
      }
    }
  }
}
