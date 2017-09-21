export const CHANGE="CHANGE";
export function changeComponent(component)
{
	return {type:CHANGE,component}
}