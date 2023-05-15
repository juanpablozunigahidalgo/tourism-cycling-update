
import React from 'react';
import './recomended.scss'

const RecommendedApps: React.FC = () => {
  return (
    <div className="recomendedmain">
        <h1 style={{
              fontFamily:'consolas',
          }}>Recommended apps</h1>
            <p style={{ marginBottom: '1em' }}>Here are practical apps for touring cyclists:</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.airbnb.android">[1] Airbnb.</a> A place to stay a night.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=fi.bitrite.android.ws">[1.1] Warmshowers.</a> A place to stay a night.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.samchristiansen.ioverlander.droid">[1.2] ioverlander.</a> Wild camping spots.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.booking">[1.3] Booking.</a> Hotel/hostel nights.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.hostelworld.app">[1.4] Hostel world.</a> Hotel/hostel nights.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.sja.firstaid">[2] First Aid Kit.</a> First Aid Guide.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.andrew.Gear_Calc_Free">[3] Gear Ratio Calculator.</a> Mechanical guidance.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.haynes.roadbikemanual&hl=en">[3.1] Mechanical Repairs.</a> Mechanical guidance.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.here.app.maps">[4] Here Maps.</a> Great offline map(s) worldwide data.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=cz.seznam.mapy">[4.1] CZ maps.</a> Great for off-road routes.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.google.android.apps.maps">[4.2] Google Maps.</a> Universal. Still great.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.atlogis.sovietmaps.free">[4.3] Soviet Maps.</a> Military maps.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=de.komoot.android">[4.4] Komoot.</a> Outdoor great.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=cc.relive.reliveapp&hl=en&gl=US">[4.5] Relive. </a> Just great tool to map your route after.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.windyty.android">[5] Windy. </a> Weather Forecast.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.google.android.apps.translate">[5] Google Translate. </a> Off line language support.</p>
            <p style={{ marginBottom: '1em' }}><a className="linkdata" href="https://play.google.com/store/apps/details?id=com.google.android.apps.docs">[6] Google Drive. </a> Storage photos. Oncloud text, spreadsheet to plan your trip.</p>
    </div>
  );
};

export default RecommendedApps;

