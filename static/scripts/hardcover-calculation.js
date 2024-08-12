function gross() {
	const form = document?.calculation
	const trim = 18 // Beschnittzugabe
	const joint = 5 // Gelenk

	if (!form?.grossWidth || !form?.grossHeight) return

		form.grossWidth.value = (form.width.value && form.strength.value) ?
			(parseInt(form.width.value.trim()) * 2 +
				parseInt(form.strength.value.trim()) +
				(trim + joint) * 2) : ""

	form.grossHeight.value = form.height.value ?
		(parseInt(form.height.value.trim()) + trim * 2) : ""
}