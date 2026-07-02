import React from 'react';
import './dataSets.css';
import image from '../../../assets/download.jpg'

const files = [
    {
        file: "countyCrimes.csv",
        description: "Summarized county averages for each crime",
        size: '923KB'
    },
    {
        file: "judgeCrimes.csv",
        description: "Summarized averages for crimes by each individual judge",
        size: '3.57 MB'
    },
    {
        file: "nationTwo.csv",
        description: "Police misconduct data set #2",
        size: '4.07 MB'
    },
    {
        file: "nationWideOne.csv",
        description: "Police misconduct data set #1",
        size: '141 KB'
    },
    {
        file: "offense_counts.csv",
        description: "Year-on-year averages for each crime",
        size: '713 KB'
    },
    {
        file: "textcsv.csv",
        description: "Police misconduct for New Jersey",
        size: '93 KB'
    },
    {
        file: "totalCrime.csv",
        description: "Summarized totals for each crime",
        size: '93 KB'
    },
    {file: "newOne.csv",
      description: "raw data.  Names hashed",
      size: '24.71 MB'
    }

];

function DataSetsComponent() {
  return (
    <div >

    <h2> Download our data sets so you can do your own "research" </h2>
     <img src={image} alt="Ralph" />
  
<p>For legalistic reasons we are not releasing it at present.  On closer inspection its possible to figure out a victim's name, especially for sexual abuse cases, by looking up the perpetrators dob.  Please contact me if you need proof.</p>

    </div>
  );
}

export default DataSetsComponent;
