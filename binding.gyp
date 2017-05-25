{
	'variables': {
		'dir'    : '3',
		# 'dir'    : '<!(node -e "console.log(require(\'.\').dir)")',
	},
	'targets': [
		{
			'target_name'  : 'remove_temporaries',
			'type'         : 'none',
			'message'      : 'Removing temporary files.',
			# 'inputs'      : ['build/Release/glfw.*'],
			# 'inputs'      : ['1', '2'],
			# 'sources!'     : ['<(dir)'],
			'actions'      : [
				{
					'action_name' : 'action_remove1',
					'inputs'      : ['1', '2', '3'],
					'inputs!'      : ['<(dir)'],
					'outputs'     : ['<(dir)'],
					'conditions'  : [
						[ 'OS=="linux"', { 'action' : [ 'rm -rf <@(_inputs)' ] } ],
						[ 'OS=="mac"'  , { 'action' : [ 'rm -rf <@(_inputs)' ] } ],
						[ 'OS=="win"'  , { 'action' : [ '<(module_root_dir)/_del', '<@(_inputs)' ] } ],
					],
				}
			],
		},
		
	]
}
