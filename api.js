import moment from 'moment';
import Expo from 'expo'
import uuid from 'uuid'

const {manifest} = Expo.Constants;

const url =  manifest.packagerOpts.dev? manifest.debuggerHost.split(":").shift().concat(":3000"): "productionurls"
const ApiURL = `http://${url}/events`


export function getEvents()
{
   return fetch(ApiURL)
  .then(response => response.json())
  .then(events => events.map(e => ({...e, date : new Date(e.date)})))
  .catch(error => console.log(error))
}

export function saveEvent(title, date)
{
  return fetch(ApiURL, {
    method: "POST",
    body : JSON.stringify({title, date, id: uuid()}),
    headers: new Headers({"Content-Type": "application/json"})
  })
  .then(res => res.json())
  .catch(error => console.log(error))

}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('D MMM YYYY');
}



export function formatDateTime(dateString)
{
  const parsed = moment (new Date(dateString));
  if(!parsed.isValid())
  {
    return dateString
  }
  return parsed.format("H A on D MM YYYY");
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
  return {
    days: parseInt(duration.as('days')),
    hours: duration.get('hours'),
    minutes: duration.get('minutes'),
    seconds: duration.get('seconds'),
  };
}