class Twitter {
    constructor() {
      this.users = new Map();
      this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
      const userInfo = this.users.get(userId);
      const userTweetList =  userInfo ? userInfo[0] : new Array();
      const followList = userInfo ? userInfo[1] : new Set();

      userTweetList.push([tweetId, this.time]);
      this.time++;

      this.users.set(userId, [userTweetList, followList]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
      const userInfo = this.users.get(userId);
      const userTweetList =  userInfo ? userInfo[0] : new Array();
      const followList = userInfo ? userInfo[1] : new Set();
      const feeds = new MaxPriorityQueue(feed => feed[1]);
      const newsFeeds = [];

      for(let i = 0; i < userTweetList.length; i++) {
        feeds.enqueue(userTweetList[i]);
      }
      
      for(const follow of followList) {
          if(follow === userId) continue;

          let followTweetList = this.users.get(follow)[0];

          for(let i = 0; i < followTweetList.length; i++) {
            feeds.enqueue(followTweetList[i]);
          }
      }
 
      while(newsFeeds.length < 10 && feeds.size() > 0){
        newsFeeds.push(feeds.dequeue()[0]);
      }
      
      return newsFeeds;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
      const userInfo = this.users.get(followerId);
      const userTweetList =  userInfo ? userInfo[0] : new Array();
      const followList = userInfo ? userInfo[1] : new Set();

      followList.add(followeeId);

      this.users.set(followerId, [userTweetList, followList]);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
      const userInfo = this.users.get(followerId);
      const userTweetList =  userInfo ? userInfo[0] : new Array();
      const followList = userInfo ? userInfo[1] : new Set();

      followList.delete(followeeId);

      this.users.set(followerId, [userTweetList, followList]);
    }
}
