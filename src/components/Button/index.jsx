import React from "react";

export default function Button({ children, ...props }) {
	const { onSave, onCancel } = props;
	
   if (!children) return null;

	return <button onClick={children.includes('Save') ? onSave : onCancel }>{children}</button>;
}
