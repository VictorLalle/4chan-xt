IDColor =
  init: ->
    return if g.VIEW not in ['index', 'thread'] or not Conf['Color User IDs']
    @ids = {}

    Post.callbacks.push
      name: 'Color User IDs'
      cb:   @node

  node: ->
    return if @isClone or not uid = @info.uniqueID
    span = $ '.hand', @nodes.uniqueID
    return unless span and span.nodeName is 'SPAN'
    rgb = IDColor.compute uid

    # Style the damn node.
    {style} = span
    style.color = rgb[3]
    style.backgroundColor = "rgb(#{rgb[0]},#{rgb[1]},#{rgb[2]})"
    $.addClass span, 'painted'
    span.title = 'Highlight posts by this ID'

  compute: (uid) ->
    return IDColor.ids[uid] if IDColor.ids[uid]

    # Convert chars to integers, bitshift and math to create a larger integer
    # Create a nice string of binary
    hash = IDColor.hash uid

    # Convert binary string to numerical values with bitshift and '&' truncation.
    rgb = [
      (hash >> 24) & 0xFF
      (hash >> 16) & 0xFF
      (hash >> 8)  & 0xFF
    ]

    # Weight color luminance values, assign a font color that should be readable. 
    rgb[3] = if (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) > 125
      '#000'
    else
      '#fff'

    # Cache.
    @ids[uid] = rgb

  hash: (uid) ->
    msg = 0
    i = 0
    while i < 8
      msg = (msg << 5) - msg + uid.charCodeAt i++
    msg
