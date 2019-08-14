import cubejs from '@cubejs-client/core'
import echarts from 'echarts'

const cubejsApi = cubejs(
    '8e8d0f4511130fec6d898644eab89a090fc841f230e1590a9a0b25a7d76464741729fe5519abe46b6b521f476c16c718e16b158024a079cb8bbf29ace56a39c0',
    { apiUrl: 'http://localhost:4000/cubejs-api/v1' }
)

cubejsApi.load({
    measures: ['Books.count'],
    dimensions: [
        'Books.name',
    ]
}).then(res => {
    let names = [], count = []
    res.loadResponse.data.forEach(item => {
        names.push(item['Books.name'])
        count.push(item['Books.count'])
    })

    let myChart = echarts.init(document.getElementById('chart'))
    myChart.setOption({
        xAxis: {
            type: 'category',
            data: names
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: count,
            type: 'bar'
        }]
    })
})




