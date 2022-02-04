import { useEffect, useState } from "react";
import { fetchAdvise, fetchAction } from "./api";
let count = 0;
function Header() {
  return (
    <div>
      <header>
        <h1 className="yellow-text text-lighten-2">What's it like?</h1>
      </header>
    </div>
  );
}
function Loading() {
  return (
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
function List(props) {
  const { action } = props;
  return (
    <p>
      <label>
        <input type="checkbox" />
        <span className="blue-text tex-white">{action}</span>
      </label>
    </p>
  );
}
function Gallery(props) {
  const { actions } = props;
  if (actions == null) {
    return <Loading />;
  }
  else {
    return (

      <div className="left-align">
        <div className="row ">
          <div className="col s12 m2">
          </div>
          <div className="col s13 m9">
            <div className="card-panel  light-blue lighten-5">
              <form action="#">
                <h5 className="deep-orange-text text">this is your list!Check when finished</h5>
                {
                  actions.map(action => {
                    return <List action={action} />
                  })
                }
                <p>
                  <label>
                    <input type="checkbox" id="last" />
                    <span className="blue-text tex-white">all done</span>
                  </label>
                </p>
              </form>
            </div>
            <div className="col s12 m2">
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const ac = document.getElementById('test5');
    props.onFormSubmit(ac.value);
  }
  return (
    <div className="row orange-text text-darken-1">
      <form className="col s12">
        <div className="row">
          <div className="center-align">
            <h5>How do you feel now?</h5>
          </div>
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea"></textarea>
            <label htmlFor="textarea1">Hit emotions!!</label>

          </div>
        </div>
      </form>
      <div className="center-align" >
        <div id="select">
          <h5>Do you want to change your mood?</h5>
          <form action="#" onSubmit={handleSubmit}>
            <div className="col s12 m4 l2"><p>I don't need it at all</p></div>
            <div className="col s12 m4 l8">
              <p className="range-field">
                <input type="range" name="action " id="test5" min="0" max="100" defaultValue="50" />
              </p>
            </div>
            <div className="col s12 m4 l2"><p>I want you to be messed up</p>
            </div>
            <button className="btn waves-effect waves-light orange accent-3 black-text" type="submit" name="action">Submit
              <i className="material-icons left">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}
function Main() {
  const [advise, setAdvise] = useState(null);
  const [action, setAction] = useState(null);
  useEffect(() => {
    fetchAdvise().then((advise) => {

      setAdvise(advise);
    });
  }, []);
  useEffect(() => {
    fetchAction(-1).then((action) => {
      setAction(action);
    });
  }, []);
  function reloadAnswer(action) {
    fetchAdvise().then((advise) => {
      setAdvise(advise);
    });
    fetchAction(action).then((action) => {
      setAction(action);
    });
  }
  return (
    <main>
      <div className="yellow-text text-darken-2"><h4>{advise}</h4></div>
      <Form onFormSubmit={reloadAnswer} />
      <Gallery actions={action} />
    </main>
  );
}
function Footer() {
  return (
    <footer className="page-footer center-align indigo darken-4 ">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Are you in trouble?</h5>
            <p className="grey-text text-lighten-4"></p>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li><a className="grey-text text-lighten-3 hoverable" href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/soudan/coronasodan.html">Coronavirus</a></li>
              <li><a className="grey-text text-lighten-3 hoverable" href="https://www.nihon-u.ac.jp/">Grades</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">debt</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          2022.1.31 5420075 高橋優月 webプログラミング 最終課題
          <a className="grey-text text-lighten-4 right" href="https://github.com/yuzuki1027/webpro-final">My github Link</a>
        </div>
      </div>
    </footer>
  );
}
function App() {
  return (
    <div className="light-blue darken-4">

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;