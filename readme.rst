Creating an interactive screencast with IPython notebooks and popcorn.js
========================================================================

I wanted to try mashing up a couple technologies I've been experimenting with
recently. `IPython notebooks`_, and `popcorn.js`_.

The idea was to take the great interactive experience of IPython, and use it to
add interaction to a screencast. For this proof of concept, I used
media from the `Software Carpentry`_ `lecture on lists`_.

You can pause the video at any point to experiment with the code samples. There
are also auto pauses at particular spots to allow the user to experiment with
the state of things up to that point, and then continue.

This was somewhat inspired by the popcornjs demo of a `sketchcast`_. But the
advantage of the IPython notebook, is that it allows you to modify and
experiment with the code immediately without needing to fork anything.

This is currently just a rough proof of concept - the cuing of IPython content
is done in a verbose way in the popcorn script. It should be possible to build
some tools and abstractions that allow a "player piano" format that would be
easier to write, or even better - to record.

It should also be possible to cue up line by line highlighting of code within
a single cell/block of code.

This type of interactivity seems to have huge advantages over watching just
a screencast - as it allows you to verify on the spot any newly aquired
understanding, test your own assumptions about what that might mean in
a slightly different context, etc.

How to run the demo:
--------------------

clone or download this repo and from the repo directory (assuming you have
ipython setup)::

    ln -s `pwd`/profile_nbcast ~/.ipython/
    ipython notebook --profile=nbcast

There should be another way to give IPython access to the static assets
required, but I could not get that command line option to work, so we link in
the profile.

.. _IPython notebooks: http://ipython.org/ipython-doc/dev/interactive/htmlnotebook.html
.. _popcorn.js: http://popcornjs.org
.. _Software Carpentry: http://software-carpentry.org
.. _lecture on lists: http://software-carpentry.org/4_0/python/lists/
.. _sketchcast: http://studio.sketchpad.cc/sp/pad/view/ro.9KPxftbkKN$2Z/latest?&soundcloud_url=http://soundcloud.com/aribadernatal/sketchcast_1342117029538



