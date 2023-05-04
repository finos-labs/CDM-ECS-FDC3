import logo from './logo.svg';
import './App.css';
// import solveUsecase from './eligibilityChecker';

function App() {
  return (
    <div className="App">
     <div className="eligibility-box">
         <div className="container">
             <div className="row">
                 <div className="col-md-12 mt-4">
                     <div className="col-sm-5 box m-lg-4 pt-4">
                        <h4>Schedules</h4>
                         <ul class="list-group tleft">
                            <li class="list-group-item">EU DEBT SECURITY 1Y-5Y SOVEREIGN_CENTRAL_BANK 15%</li>
                            <li class="list-group-item">US DEBT SECURITY 1Y-5Y SOVEREIGN_CENTRAL_BANK 10%</li>
                            <li class="list-group-item"> US DEBT SECURITY 1Y-5Y CORPORATE 4%</li>
                            <li class="list-group-item"> USD  CASH 0%</li>
                            <li class="list-group-item">EU DEBT SECURITY 1Y-5Y SOVEREIGN_CENTRAL_BANK 2%</li>
                            <li class="list-group-item">US DEBT SECURITY 1Y-5Y SOVEREIGN_CENTRAL_BANK 2%</li>
                            <li class="list-group-item">US DEBT SECURITY 1Y-5Y SOVEREIGN_CENTRAL_BANK 4%</li>
                         </ul>
                     </div>
                     <div className="col-sm-5 box m-lg-4 pt-4">
                         <div className="box-blue p-1">
                             <h4>Check Eligibility</h4>
                             <form>
                                 <div className="form-group row m-1">
                                     <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Asset Country or Currency</label>
                                     <div className="col-sm-8">
                                         <input type="text" className="form-control" id="assetCountry"
                                                value="EU"/>
                                     </div>
                                 </div>
                                 <div className="form-group row m-1">
                                     <label htmlFor="assetType" className="col-sm-4 col-form-label">Asset Type</label>
                                     <div className="col-sm-8">
                                         <input type="text" className="form-control" id="assetType"
                                                value="Debt Security"/>
                                     </div>
                                 </div>
                                 <div className="form-group row m-1">
                                     <label htmlFor="issuerType" className="col-sm-4 col-form-label">Issuer Type</label>
                                     <div className="col-sm-8">
                                         <input type="text" className="form-control" id="issuerType"
                                                value="Central Bank"/>
                                     </div>
                                 </div>
                                 <div className="form-group row m-1">
                                     <label htmlFor="maturity" className="col-sm-4 col-form-label">Maturity</label>
                                     <div className="col-sm-8">
                                         <input type="text" className="form-control" id="maturity"
                                                value="4Y"/>
                                     </div>
                                 </div>
                                 <button className="col-sm-10"type="button" className="btn btn-secondary">Submit</button>
                             </form>
                         </div>
                         <div className="box-blue p-1">
                             <h4>Results</h4>
                             <ul>
                                <li>EU Debt Security 1Y-5Y SOVEREIGN_CENTRAL_BANK 15%</li>
                                <li>EU Debt Security 1Y-5Y SOVEREIGN_CENTRAL_BANK 2%</li>
                             </ul>
                         </div>
                     </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  );
}

export default App;
