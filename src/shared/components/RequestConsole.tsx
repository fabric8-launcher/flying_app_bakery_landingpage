import * as React from 'react';
import {Console} from './Console';
import * as moment from 'moment';
import JSONPretty from 'react-json-pretty';

import 'react-json-pretty/src/JSONPretty.monikai.css';

export interface RequestResult {
  time: number;
  url: string;
  method: string;
  result: any;
}

export default function RequestConsole(props: { id: string, results: RequestResult[]}) {

  const res = props.results.map(r => (
    <React.Fragment>
      <div>
        <span className="prefix">$</span>&nbsp;
        <span className="time">{moment(r.time).format('LTS')}</span>&nbsp;
        <span className={`method method-${r.method.toLowerCase()}` }>{r.method}</span>&nbsp;
        <span className="url">{r.url}</span>:
      </div>
      <div>{(typeof r.result === 'string') ? r.result: <JSONPretty json={r.result} />}</div>
    </React.Fragment>
  ));

  return (
    <Console id={props.id} content={res}/>
  );
}