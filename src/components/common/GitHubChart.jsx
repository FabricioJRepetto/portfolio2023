import React, { useEffect, useState } from 'react'
const VITE_GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const GitHubChart = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const endpoint = "https://api.github.com/graphql";
        const headers = {
            "content-type": "application/json",
            "Authorization": "Bearer " + VITE_GITHUB_TOKEN
        };
        const graphqlQuery = {
            "query": `query($userName:String!) { 
                user(login: $userName){
                    contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                        contributionDays {
                            contributionCount
                            date
                        }
                        }
                    }
                    }
                }
                }`,
            "variables": { "userName": "FabricioJRepetto" }
        };

        (() => {
            fetch(endpoint, {
                method: 'post',
                headers: headers,
                body: JSON.stringify(graphqlQuery)
            })
                .then(res => res.json())
                .then(res => res.data.user.contributionsCollection.contributionCalendar)
                .then(data => {
                    const days = []
                    let max = 0
                    data.weeks.forEach(w => {
                        w.contributionDays.forEach(d => {
                            const num = d.contributionCount
                            days.push(num)
                            if (num > max) max = num
                        })
                    })
                    // console.log(aux)
                    setData(() => ({
                        total: data.totalContributions,
                        days,
                        avg: {
                            max,
                            lvl1: Math.round(max / 3),
                            lvl2: Math.round(max / 3) * 2
                        }
                    }))
                })
        })()
    }, [])

    const lvl = (n) => {
        const { lvl1, lvl2, max } = data.avg
        if (n === 0)
            return '0'
        if (n > 0 && n <= lvl1)
            return '1'
        if (n > lvl1 && n <= lvl2)
            return '2'
        if (n > lvl2 && n <= max)
            return '3'
    }

    return (
        <div className='relative animate-pulse'>
            {!!data?.days?.length &&
                <div className='days-grid absolute top-0 right-0'>
                    {
                        data?.days?.map((d, i) => (
                            <div key={i} data-level={lvl(d)}></div>
                        ))
                    }
                    <p className='chart-text'>{data?.total || ''}</p>
                </div>}
        </div>
    )
}

export default GitHubChart