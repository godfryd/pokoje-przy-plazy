files = index.html rooms-list.html room-1.html room-2.html room-3.html room-4.html room-5.html room-6.html contact.html

all: $(files)

$(files): parts-footer.html parts-top.html

$(files): %.html: %.tpl.html
#	j2 $< -o $@
	jinja2 -D high_price=190 -D low_price=190 $< -o $@

run:
	find . -name '*html' | entr make
