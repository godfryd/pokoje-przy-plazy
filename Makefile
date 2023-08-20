files = index.html rooms-list.html room-1.html contact.html

all: $(files)

$(files): parts-footer.html parts-top.html

$(files): %.html: %.tpl.html
#	j2 $< -o $@
	jinja2 -D high_price=350 -D low_price=300 $< -o $@

run:
	find . -name '*html' | entr make
