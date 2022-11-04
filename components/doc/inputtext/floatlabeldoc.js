import { useState } from "react";
import { InputText } from "../../lib/inputtext/InputText";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function FloatLabelDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<span className="p-float-label">
    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
    <label htmlFor="username">Username</label>
</span>
        `,
        javascript: `
import { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');

    return (
        <div>
            <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div>
            <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.
            </DocSectionText>
            <div className="card">
                <span className="p-float-label">
                    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    )
}