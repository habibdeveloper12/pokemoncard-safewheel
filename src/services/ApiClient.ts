class ApiClient {
  client;
  constructor(client) {
    this.client = client;
  }

  async query(query, options = {}) {
    return await this.client.query({ query, ...options });
  }

  async mutation(query, obj) {
    return await this.client.mutate({
      mutation: query,
      variables: obj,
    });
  }
  async refetch(query) {
    return await this.client.refetchQueries({
      include: [{ query }],
    });
  }
}
export default ApiClient;
