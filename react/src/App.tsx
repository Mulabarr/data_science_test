import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from "./components/Chart";

export type ChartModelType = {
  account_name: string,
  campaign: string,
  clicks: number,
  source: string,
  spend: number
}

function App() {

  const [data, setData] = useState<ChartModelType[]>([])
  const loadData = async () => {
    const data = await fetch('https://connectors.windsor.ai/google_ads?api_key=1c45ad2a046f7660c7a9f6c6c35c8f547880&date_preset=last_7d&fields=account_name,campaign,clicks,source,spend&_renderer=json')
        .then(response => response.json())
    setData(data.data)
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="App">
      <Chart data={data}/>
    </div>
  );
}

export default App;
