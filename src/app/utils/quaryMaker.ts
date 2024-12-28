import { Query } from 'mongoose';

class QueryMaker<T> {
  public QueryModel: Query<T[], T>;
  public Query: Record<string, unknown>;
  constructor(QueryModel: Query<T[], T>, Query: Record<string, unknown>) {
    this.QueryModel = QueryModel;
    this.Query = Query;
  }

  search(searchArray: string[]) {
    const search = this.Query.search || '';
    this.QueryModel = this.QueryModel.find({
      $or: searchArray.map((field) => ({
        [field]: { $regex: search, $options: 'i' },
      })),
    });
    return this;
  }
  sort() {
    const sortBy = (this.Query.sortBy as string) || 'createdAt';
    const sortOrder = this.Query.sortOrder === 'asc' ? 1 : -1;
    this.QueryModel = this.QueryModel.sort({ [sortBy]: sortOrder });
    return this;
  }
  filter() {
    const quaryObj = { ...this.Query };
    const ExculsiveFeild = ['search', 'sortBy', 'sortOrder'];
    ExculsiveFeild.forEach((key) => delete quaryObj[key]);
    console.log(quaryObj)
    this.QueryModel = this.QueryModel.find(quaryObj);
    return this;
  }
}
export default QueryMaker;