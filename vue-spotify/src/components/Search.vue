<template>
  <div class="container">
    <div class="col-md-3 text-center">
        <img style="display: inline-block;width:120px;" src="../assets/logo.png" alt="LOGO">
    </div>
    <div class="col-md-9">
        <h3>搜索音乐?</h3>
         <p class="lead">使用spotify API搜索音乐: <a href="https://developer.spotify.com/web-api/" target="_blank">https://developer.spotify.com/web-api/</a> </p>
        <form>
            <div class="form-group">
                <input type="text" name="searchStr" v-model="searchStr" v-on:keyup="doSearch" class="form-control" placeholder="音乐关键字...">
            </div>
        </form>
    </div>
    <!--输出搜索结果-->
    <div v-if="searchRes">
    <div v-bind:key="mykey" v-for="(res,mykey) in searchRes">
        <div class="row">
            <div class="col-md-12">
                <div class="search-res well">
                    <h4><router-link v-bind:to="'/artist/'+res.id">{{res.name}}</router-link></h4>
                    <div>
                        <strong>Genres: </strong>
                        <span v-bind:key="genreKey" v-for="(genre,genreKey) in res.genres">{{genre}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchStr: '',
      searchRes: []
    }
  },
  methods: {
    doSearch () {
      var type = 'artist'
      this.$http
        .get(
          'https://api.spotify.com/v1/search?query=' +
            this.searchStr +
            '&offset=0&limit=20&type=' +
            type +
            '&market=US'
        )
        .then(function (response) {
          this.searchRes = response.body.artists.items
        })
    }
  }
}
</script>
