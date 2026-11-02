import { EVENT } from './event';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function toICSDate(d: Date) {
  return (
    d.getUTCFullYear().toString() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    'T' +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    'Z'
  );
}

export function downloadInvite() {
  const start = EVENT.date;
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//${EVENT.brideName}And${EVENT.groomName}//Wedding//EN`,
    'BEGIN:VEVENT',
    `UID:${Date.now()}@anshikaprashantwedding.com`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:${EVENT.brideName} & ${EVENT.groomName}'s Wedding Celebration`,
    `DESCRIPTION:Together with their families, cordially invite you to celebrate the wedding ceremony of ${EVENT.brideFull} and ${EVENT.groomFull}. ${EVENT.hashtag}`,
    `LOCATION:${EVENT.venueName}, ${EVENT.venueAddress}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${EVENT.brideName}-${EVENT.groomName}-Wedding.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
