import { Route, Switch } from "react-router-dom";

import { lazy, Suspense } from "preact/compat";

import { Masks, Preloader } from "@revoltchat/ui";

import ErrorBoundary from "../lib/ErrorBoundary";
import FakeClient from "../lib/FakeClient";

import Context from "../context";
import { CheckAuth } from "../context/revoltjs/CheckAuth";

import Invite from "./invite/Invite";

const Login = lazy(() => import("./login/Login"));
const ConfirmDelete = lazy(() => import("./login/ConfirmDelete"));
const RevoltApp = lazy(() => import("./RevoltApp"));

export function App() {
    return (
        <ErrorBoundary section="client">
            <Context>
                <Masks />
                {/* 
                // @ts-expect-error typings mis-match between preact... and preact? */}
                <Suspense fallback={<Preloader type="spinner" />}>
                    <Switch>
                        <Route path="/login/verify/:token">
                            <Login />
                        </Route>
                        <Route path="/login/reset/:token">
                            <Login />
                        </Route>
                        <Route path="/delete/:token">
                            <ConfirmDelete />
                        </Route>
                        <Route path="/invite/:code">
                            <CheckAuth blockRender>
                                <FakeClient>
                                    <Invite />
                                </FakeClient>
                            </CheckAuth>
                            <CheckAuth auth blockRender>
                                <Invite />
                            </CheckAuth>
                        </Route>
                        <Route path="/login">
                            <CheckAuth>
                                <Login />
                            </CheckAuth>
                        </Route>
                        <Route path="/">
                            <CheckAuth auth>
                                <RevoltApp />
                            </CheckAuth>
                        </Route>
                    </Switch>
                </Suspense>
            </Context>
        </ErrorBoundary>
    );
}
