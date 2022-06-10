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

  filter() {
    const queryCopy = { ...this.queryStr };
    // console.log("32",queryCopy)
    //   Removing some fields for category
    const removeFields = ["keyword", "page"];

    removeFields.forEach((key) => delete queryCopy[key]);
    // console.log(queryCopy)
    this.query= this.query.find(queryCopy);
    return this
}

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }

}

module.exports = ApiFeatures;