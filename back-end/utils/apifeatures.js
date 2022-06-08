class ApiFeatures {
      constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

    search() {
      const keyword = this.queryStr.keyword
      ? 
        {$or:[{
            name: {
                $regex: this.queryStr.keyword,
                $options: "i",
              },
          },
          {
            authour: {
                $regex: this.queryStr.keyword,
                $options: "i",
              },
          }
          ]
          }
        : 
        {};
        // console.log('16',keyword)
    this.query = this.query.find({ ...keyword });
    return this;
  }

}

module.exports = ApiFeatures;