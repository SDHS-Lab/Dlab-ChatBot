const ListCardMessage = (JSON_data) => {




  return {
    version: "2.0",
    template: {
      outputs: [
        {
          listCard: {
            header: {
              title: "용산구 미세먼지 정보",
            },
            items: JSON_data
          }
        }
      ]
    }
  }
}
  export {ListCardMessage}