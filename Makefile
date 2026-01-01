files = index.html rooms-list.html room-1.html room-2.html room-3.html room-4.html room-5.html room-6.html contact.html

all: $(files)

$(files): parts-head.html parts-footer.html parts-top.html Makefile data.yaml

$(files): %.html: %.tpl.html
#	j2 $< -o $@
	jinja2 $< data.yaml --format=yaml -o $@

run:
	find . -name '*html' | entr make
