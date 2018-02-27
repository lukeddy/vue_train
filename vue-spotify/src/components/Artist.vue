<template>
  <div class="container">
     <div v-if="artist">
	    <header class="artist-header">
	        <div v-if="artist.images&&artist.images.length > 0">
	            <img class="artist-thumb img-circle" v-bind:src="artist.images[0].url">
	        </div>
	        <h1>{{artist.name}}</h1>
	        <p v-if="artist.genres&&artist.genres.length > 0">
	            风格流派: <span v-for="genre in artist.genres">{{genre}}</span>
	        </p>
	    </header>

	    <div v-if="albums" class="artist-albums">
	        <div class="row">
	            <div v-for="album in albums">
	                <div class="col-md-3">
	                    <div class="well album">
	                        <div v-if="album.images&&album.images.length > 0">
	                            <img class="album-thumb img-thumbnail" v-bind:src="album.images[0].url">
	                            <h4>{{album.name}}</h4>
	                            <router-link class="btn btn-default btn-block" v-bind:to="'/album/'+album.id">专辑详情</router-link>
	                        </div>
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
  name: 'Artist',
  data () {
    return {
      artist:{},
      albums:[]
    }
  },
  methods:{
    fetchArtist(artistId){
     
       this.$http.get('https://api.spotify.com/v1/artists/'+artistId)
            .then(function(response){
                this.artist = response.body;
            });

       
       this.$http.get('https://api.spotify.com/v1/artists/'+artistId+'/albums')
            .then(function(response){
                this.albums = response.body.items;
            });
    }
  },
  created:function(){
    this.fetchArtist(this.$route.params.id);
  }
}
</script>


<style scoped>
  .artist-header{
    padding-bottom:20px;
    margin-bottom:20px;
    border-bottom:solid 1px #333;
}

.artist-thumb{
    width:70px;
    height:70px;
    float:left;
    margin-right:10px;
}

.artist-albums .well{
    margin-bottom:20px;
    overflow:auto;
    height:320px;
}
 
</style>