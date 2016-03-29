var module = angular.module('twit', []);

module.controller('TweetCtrl', TweetCtrl);

function TweetCtrl() {
  var vm = this;
  this.tweeters = [];
  
  this.addTweet = function (tweet) {
    vm.tweeters.push({
      date: new Date(),
      tweet: tweet,
      liked: false
    });

    
  }
}

