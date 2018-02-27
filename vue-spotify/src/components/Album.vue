<template>
  <div class="container">
    <div id="album" v-if="album">
	    <header class="album-header">
	        <div class="row">
	            <div class="col-md-4">
	                <div v-if="album.images&&album.images.length > 0">
	                    <img class="album-thumb" v-bind:src="album.images[0].url">
	                </div>
	            </div>
	            <div class="col-md-8">
	                <h4 v-if="album.artists&&album.artists.length > 0"><span v-for="artist in album.artists">
	                {{artist.name}}
	                </span></h4>
	                <h2>{{album.name}}</h2>
	                <h5>Release Date: {{album.release_date}}</h5>
                    <p v-if="album.external_urls.spotify">
                       <a class="btn btn-default btn-block" :href="album.external_urls.spotify">在Spotify查看</a>
                    </p>
	            </div>
	        </div>
	    </header>

	    <div v-if="album.tracks" class="album-tracks">
	        <h2>专辑曲目</h2>
	        <div class="col-md-3" v-for="track in album.tracks.items">
	            <div class="well">
	                <h5>{{track.track_number}} - {{track.name}}</h5>
	                <a class="btn btn-default" :href="track.preview_url">预览曲目</a>
	            </div>
	        </div>
	    </div>
 </div>
</div>
</template>

<script>
export default {
  name: 'Album',
  data () {
    return {
      album:{}
    }
  },
  methods:{
    fetchAlbum(albumId){
       this.$http.get('https://api.spotify.com/v1/albums/'+albumId)
            .then(function(response){
                 this.album = response.body;
            });
    }
  },
  created:function(){
    this.fetchAlbum(this.$route.params.id);
  }
}
</script>

<style scoped>
.album{
    text-align: center;
    background: #333;
    padding: 10px 20px;
    border:#666 1px solid;
}

.album-thumb{
    width:210px;
    height:210px;
}
</style>
