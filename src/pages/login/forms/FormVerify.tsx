import { useHistory, useParams } from "react-router-dom";

import { useEffect, useState } from "preact/hooks";

import { Category, Preloader } from "@revoltchat/ui";

import { useApplicationState } from "../../../mobx/State";

import { I18nError } from "../../../context/Locale";
import { takeError } from "../../../context/revoltjs/util";

import { Form } from "./Form";

export function FormResend() {
    const config = useApplicationState().config;
    const client = config.createClient();

    return (
        <Form
            page="resend"
            callback={async (data) => {
                await client.api.post("/auth/account/reverify", data);
            }}
        />
    );
}

export function FormVerify() {
    const [error, setError] = useState<undefined | string>(undefined);
    const { token } = useParams<{ token: string }>();
    const config = useApplicationState().config;
    const client = config.createClient();
    const history = useHistory();

    useEffect(() => {
        client.api
            .post(`/auth/account/verify/${token as ""}`)
            .then(() => history.push("/login"))
            .catch((err) => setError(takeError(err)));
        // eslint-disable-next-line
    }, []);

    return error ? (
        <Category>
            <I18nError error={error} />
        </Category>
    ) : (
        <Preloader type="ring" />
    );
}
